/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createStringCollectionResponseFromDiscriminatorValue, serializeReferenceCreate, type ReferenceCreate, type StringCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of print entities.
 */
export interface RefRequestBuilder extends BaseRequestBuilder<RefRequestBuilder> {
    /**
     * Revoke the specified user's access to submit print jobs to the associated printerShare.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The printerShares navigation property is deprecated and will stop returning data on July 31, 2023. Please use the shares navigation property instead of this. as of 2023-06/Tasks_And_Plans on 2023-06-13 and will be removed 2023-07-31
     * @see {@link https://learn.microsoft.com/graph/api/printershare-delete-alloweduser?view=graph-rest-beta|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<RefRequestBuilderDeleteQueryParameters> | undefined) : Promise<void>;
    /**
     * The users who have access to print using the printer.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<StringCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The printerShares navigation property is deprecated and will stop returning data on July 31, 2023. Please use the shares navigation property instead of this. as of 2023-06/Tasks_And_Plans on 2023-06-13 and will be removed 2023-07-31
     */
     get(requestConfiguration?: RequestConfiguration<RefRequestBuilderGetQueryParameters> | undefined) : Promise<StringCollectionResponse | undefined>;
    /**
     * Create new navigation property ref to allowedUsers for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The printerShares navigation property is deprecated and will stop returning data on July 31, 2023. Please use the shares navigation property instead of this. as of 2023-06/Tasks_And_Plans on 2023-06-13 and will be removed 2023-07-31
     */
     post(body: ReferenceCreate, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Revoke the specified user's access to submit print jobs to the associated printerShare.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The printerShares navigation property is deprecated and will stop returning data on July 31, 2023. Please use the shares navigation property instead of this. as of 2023-06/Tasks_And_Plans on 2023-06-13 and will be removed 2023-07-31
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<RefRequestBuilderDeleteQueryParameters> | undefined) : RequestInformation;
    /**
     * The users who have access to print using the printer.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The printerShares navigation property is deprecated and will stop returning data on July 31, 2023. Please use the shares navigation property instead of this. as of 2023-06/Tasks_And_Plans on 2023-06-13 and will be removed 2023-07-31
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RefRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property ref to allowedUsers for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The printerShares navigation property is deprecated and will stop returning data on July 31, 2023. Please use the shares navigation property instead of this. as of 2023-06/Tasks_And_Plans on 2023-06-13 and will be removed 2023-07-31
     */
     toPostRequestInformation(body: ReferenceCreate, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Revoke the specified user's access to submit print jobs to the associated printerShare.
 */
export interface RefRequestBuilderDeleteQueryParameters {
    /**
     * The delete Uri
     */
    id?: string;
}
/**
 * The users who have access to print using the printer.
 */
export interface RefRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
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
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const RefRequestBuilderUriTemplate = "{+baseurl}/print/printerShares/{printerShare%2Did}/allowedUsers/$ref?@id={%40id}{&%24count,%24filter,%24orderby,%24search,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const RefRequestBuilderDeleteQueryParametersMapper: Record<string, string> = {
    "id": "%40id",
};
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const RefRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RefRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: RefRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        queryParametersMapper: RefRequestBuilderDeleteQueryParametersMapper,
    },
    get: {
        uriTemplate: RefRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createStringCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: RefRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: RefRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeReferenceCreate,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
