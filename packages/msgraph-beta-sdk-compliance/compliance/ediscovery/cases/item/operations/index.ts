/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCaseOperationCollectionResponseFromDiscriminatorValue, createCaseOperationFromDiscriminatorValue, serializeCaseOperation, type CaseOperation, type CaseOperationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/ediscovery/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { CaseOperationItemRequestBuilderNavigationMetadata, CaseOperationItemRequestBuilderRequestsMetadata, CaseOperationItemRequestBuilderUriTemplate, type CaseOperationItemRequestBuilder } from './item/';
import { MicrosoftGraphEdiscoveryCaseExportOperationRequestBuilderNavigationMetadata, MicrosoftGraphEdiscoveryCaseExportOperationRequestBuilderRequestsMetadata, MicrosoftGraphEdiscoveryCaseExportOperationRequestBuilderUriTemplate, type MicrosoftGraphEdiscoveryCaseExportOperationRequestBuilder } from './microsoftGraphEdiscoveryCaseExportOperation/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the operations property of the microsoft.graph.ediscovery.case entity.
 */
export interface OperationsRequestBuilder extends BaseRequestBuilder<OperationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
    get count(): CountRequestBuilder;
    /**
     * Casts the previous resource to caseExportOperation.
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
    get microsoftGraphEdiscoveryCaseExportOperation(): MicrosoftGraphEdiscoveryCaseExportOperationRequestBuilder;
    /**
     * Provides operations to manage the operations property of the microsoft.graph.ediscovery.case entity.
     * @param caseOperationId The unique identifier of caseOperation
     * @returns a CaseOperationItemRequestBuilder
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     byCaseOperationId(caseOperationId: string) : CaseOperationItemRequestBuilder;
    /**
     * Returns a list of case operation objects for this case. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CaseOperationCollectionResponse
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     get(requestConfiguration?: RequestConfiguration<OperationsRequestBuilderGetQueryParameters> | undefined) : Promise<CaseOperationCollectionResponse | undefined>;
    /**
     * Create new navigation property to operations for compliance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CaseOperation
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     post(body: CaseOperation, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CaseOperation | undefined>;
    /**
     * Returns a list of case operation objects for this case. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<OperationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to operations for compliance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     toPostRequestInformation(body: CaseOperation, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Returns a list of case operation objects for this case. Nullable.
 */
export interface OperationsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const OperationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const OperationsRequestBuilderNavigationMetadata: Record<Exclude<keyof OperationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCaseOperationId: {
        uriTemplate: CaseOperationItemRequestBuilderUriTemplate,
        requestsMetadata: CaseOperationItemRequestBuilderRequestsMetadata,
        navigationMetadata: CaseOperationItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["caseOperation%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    microsoftGraphEdiscoveryCaseExportOperation: {
        uriTemplate: MicrosoftGraphEdiscoveryCaseExportOperationRequestBuilderUriTemplate,
        requestsMetadata: MicrosoftGraphEdiscoveryCaseExportOperationRequestBuilderRequestsMetadata,
        navigationMetadata: MicrosoftGraphEdiscoveryCaseExportOperationRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const OperationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCaseOperationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: OperationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCaseOperationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCaseOperation,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const OperationsRequestBuilderUriTemplate = "{+baseurl}/compliance/ediscovery/cases/{case%2Did}/operations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */