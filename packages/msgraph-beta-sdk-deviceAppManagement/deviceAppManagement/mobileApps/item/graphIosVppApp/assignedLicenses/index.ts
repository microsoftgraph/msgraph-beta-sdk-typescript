/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createIosVppAppAssignedLicenseCollectionResponseFromDiscriminatorValue, createIosVppAppAssignedLicenseFromDiscriminatorValue, serializeIosVppAppAssignedLicense, type IosVppAppAssignedLicense, type IosVppAppAssignedLicenseCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { IosVppAppAssignedLicenseItemRequestBuilderRequestsMetadata, IosVppAppAssignedLicenseItemRequestBuilderUriTemplate, type IosVppAppAssignedLicenseItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignedLicenses property of the microsoft.graph.iosVppApp entity.
 */
export interface AssignedLicensesRequestBuilder extends BaseRequestBuilder<AssignedLicensesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the assignedLicenses property of the microsoft.graph.iosVppApp entity.
     * @param iosVppAppAssignedLicenseId The unique identifier of iosVppAppAssignedLicense
     * @returns a IosVppAppAssignedLicenseItemRequestBuilder
     */
     byIosVppAppAssignedLicenseId(iosVppAppAssignedLicenseId: string) : IosVppAppAssignedLicenseItemRequestBuilder;
    /**
     * The licenses assigned to this app.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IosVppAppAssignedLicenseCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<AssignedLicensesRequestBuilderGetQueryParameters> | undefined) : Promise<IosVppAppAssignedLicenseCollectionResponse | undefined>;
    /**
     * Create new navigation property to assignedLicenses for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IosVppAppAssignedLicense
     */
     post(body: IosVppAppAssignedLicense, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<IosVppAppAssignedLicense | undefined>;
    /**
     * The licenses assigned to this app.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AssignedLicensesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to assignedLicenses for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: IosVppAppAssignedLicense, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The licenses assigned to this app.
 */
export interface AssignedLicensesRequestBuilderGetQueryParameters {
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
const AssignedLicensesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AssignedLicensesRequestBuilderNavigationMetadata: Record<Exclude<keyof AssignedLicensesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byIosVppAppAssignedLicenseId: {
        uriTemplate: IosVppAppAssignedLicenseItemRequestBuilderUriTemplate,
        requestsMetadata: IosVppAppAssignedLicenseItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["iosVppAppAssignedLicense%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AssignedLicensesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createIosVppAppAssignedLicenseCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AssignedLicensesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createIosVppAppAssignedLicenseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeIosVppAppAssignedLicense,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AssignedLicensesRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/mobileApps/{mobileApp%2Did}/graph.iosVppApp/assignedLicenses{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */